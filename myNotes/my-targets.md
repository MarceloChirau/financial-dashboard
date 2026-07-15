# To calm down my cpu
-----------------------


## For Cursor
 ### Find the Rogue Extension or FolderOpen Process Explorer:
  Inside Cursor, press Cmd + Shift + P, type "Developer: Open Process Explorer", and hit enter. This will show you exactly which extension or file process maps to that high CPU number in Activity Monitor.Test Clean Mode: Launch Cursor from your terminal with extensions temporarily turned off:Bashcursor --disable-extensions
If your CPU drops to normal, you know a specific extension is causing the leak. Turn them back on one-by-one to catch the culprit.Check your .gitignore: Ensure heavy local directories like node_modules or build/dist folders are properly ignored so Cursor isn't wasting cycles indexing millions of lines of dependency code.

## For Google Chrome
 Find the Heavy TabInside Chrome, press Shift + Esc (or click the three dots in the top right -> More Tools -> Task Manager).This opens Chrome’s built-in Task Manager. It links the mysterious "Helper ID" numbers to actual tab names or extensions.  Sort by CPU, select the runaway tab or extension, and click End Process.

 ---
 
database resource name: neon-bisque-fence
