For my solution i have used javascript as the language and MySQL as the database.
My solution writes all data from the database to a file called "myOutput" but because of the asynchronous nature 
of javascript i will start verifying the data in the file before all of it has been written to it.
The code at the bottom of my program where i delete the database should be run after you've run the program
at least once, again because of the asynchronous nature of javascript it wants to delete the database before
it has read all of it and written to file and verified.

the next step would be to make the program work properly, make sure it writes everything to file before verifying
and deleting the database, i have no experince with asynchronous programming so this is a new concept for me. 