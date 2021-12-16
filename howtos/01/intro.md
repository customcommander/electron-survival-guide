# Bad Practice 101

It is sometimes helpful to know what not to do. Just so we're clear: **don't do this!** ;)

This is only to show how easy it is for *any* JavaScript code running in the renderer process to behave
like a full-blown Node.js program including access to Node.js `require` and its native APIs.

We have also disabled context isolation meaning that any script (including third-party script)
can also manipulate the page and its data (e.g. cookies).

If your app gets compromised (e.g. XSS, rogue third-party dependency, etc.) the potential for damage is huge.
