# Can I share an IPC channel with multiple processes?

Multiple renderer processes can invoke the main process on the same channel.
The main process always respond to the correct renderer process.