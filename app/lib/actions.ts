'use server';
import {z} from 'zod' ;
import {revalidatePath} from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';

const sql=postgres(process.env.POSTGRES_URL!,{ssl:'require'});

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
  });

  const CreateInvoice=FormSchema.omit({id:true,date:true});



export async function createInvoice(formData:FormData){

// const rawFormData={
//     customerId:formData.get('customerId'),
//     amount:formData.get('amount'),
//     status:formData.get('status'),

// }
// console.log(rawFormData)

//we refactor to validate types with zod
const{customerId,amount,status}=CreateInvoice.parse({
    customerId:formData.get('customerId'),
    amount:formData.get('amount'),
    status:formData.get('status'),
})

//convert amounts in cents`:
const amountInCents=amount*100;
const date=new Date().toISOString().split('T')[0];

await sql`
INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
`
//Since you're updating the data displayed in the invoices route,
//  you want to clear this cache and trigger a new request to the server.
//  You can do this with the revalidatePath function from Next.js:
//Once the database has been updated, the /dashboard/invoices path will be revalidated,
//  and fresh data will be fetched from the server.
revalidatePath('/dashboard/invoices');

//At this point, you also want to redirect the user back to the /dashboard/invoices page.
//  You can do this with the redirect function from Next.js:
redirect('/dashboard/invoices');
}


// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
// ...
 
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}