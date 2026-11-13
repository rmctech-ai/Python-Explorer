window.EXPLAIN = {
"meet-python": [
 [null, ["Python runs one statement at a time; it doesn't execute the whole file at once.", null, "Execution never runs backwards.", "Order is fully deterministic."]],
 [null, ["// is a comment in JavaScript, Java and C; in Python it's floor division.", null, "-- comments are SQL and Lua.", "/* */ block comments are C-style; Python has none."]],
 [null, ["Comments can go anywhere and don't satisfy the colon.", null, "Python doesn't need semicolons.", "Leaving the block empty is a syntax error (use pass)."]],
 [null, [null, "A file works, but takes longer for a one-liner.", "pip installs packages.", "Git tracks versions."]]
],
"setup": [
 [null, ["A venv doesn't speed up the CPU.", null, "A venv doesn't encrypt anything.", "print() works without any environment."]],
 [null, ["Code ends up in Git and gets shared.", null, "READMEs are public documentation.", "Comments are still in the code."]],
 [null, ["uv run runs things; uv add installs.", null, "uv remove deletes packages.", "Ruff formats code."]],
 [null, [null, "boto3 is the AWS SDK.", "pip installs packages.", "venv creates environments."]]
],
"variables": [
 [null, ["Quotes make it text, even if it's digits.", null, "Floats need a decimal point and no quotes.", "Booleans are True or False."]],
 [null, ["b was bound to the 10 object; moving a doesn't move b.", null, "b has a value, so it isn't None.", "This is valid code."]],
 [null, ["Lowercase true is a NameError.", "All caps isn't valid either.", null, "Quoted, it's a string, not a boolean."]],
 [null, ["Too vague to understand later.", "PascalCase is for class names.", null, "Spaces aren't allowed in names."]]
],
"strings": [
 [null, [null, "That would be [0:3].", "That would be [1:3].", "That would be [0:1] or [0]."]],
 [null, ["That's the returned value, but s itself didn't change.", null, "strip() returns a string, not None.", "No error; it just returns a new string."]],
 [null, ["That sets a minimum width of 2, not decimals.", null, "Invalid format syntax.", "Without the f prefix nothing is substituted."]],
 [null, ["split doesn't join the pieces.", null, "It returns a list, not a tuple.", "It returns the pieces, not a count."]]
],
"operators": [
 [null, ["That's 7 / 2 (true division).", null, "Floor division rounds down, not up.", "That's 7 % 2 (the remainder)."]],
 [null, ["You must convert with int() yourself.", null, "It's always str, whatever you type.", "Use float() to convert."]],
 [null, ["= assigns a value.", null, "=== is JavaScript.", "eq is used in shells and Perl, not Python."]],
 [null, [null, "(True and False) is False, then False or True is True.", "It's valid syntax.", "Boolean operators return a value here, not None."]]
],
"if-else": [
 [null, [null, "It's never reached because cpu >= 75 matched first.", "Only one branch of an if/elif chain runs.", "The first branch matches."]],
 [null, ["Any non-empty string is truthy, even \"0\".", "A list with one item is truthy, even if the item is 0.", null, "Non-empty strings are truthy, even \"False\"."]],
 [null, ["Invalid syntax; the value comes before if.", null, "?: is the ternary in C and JavaScript, not Python.", "There's no built-in choose()."]],
 [null, ["Only the first True branch runs.", null, "Never two.", "It's the first match, not the last."]]
],
"loops": [
 [null, ["range starts at 0, not 1.", null, "The stop value 3 isn't included.", "range(3) generates three numbers."]],
 [null, ["break exits the loop completely.", "pass does nothing and keeps going.", null, "next() gets the next item from an iterator."]],
 [null, ["Speed isn't the danger.", null, "if works inside while loops.", "while loops work on any condition."]],
 [null, ["zip pairs items from several lists.", null, "range needs a number, not a list.", ".index() searches for one item."]]
],
"lists": [
 [null, [".add() is for sets.", null, "Concatenation needs another list, and doesn't change servers in place.", ".push() is JavaScript."]],
 [null, ["Use sorted(nums) to get a new sorted list.", null, "sort() returns None.", "sort() changes the original list."]],
 [null, ["b is the same list as a, not a copy.", null, "append adds to the end.", "Valid code."]],
 [null, ["That's rows[0][0].", "That's rows[0][1].", null, "That's rows[1][1]."]]
],
"dicts": [
 [null, ["d[\"owner\"] raises KeyError when the key is missing.", null, "Dicts don't support attribute access.", "Dicts have no .find()."]],
 [null, ["Looping over a dict gives only keys.", null, ".values() gives only values.", "Invalid syntax."]],
 [null, ["users is a list; you need an index first.", null, "data is a dict; it has no index 0.", "Dicts don't use dot access."]],
 [null, ["Assigning to an existing key is fine.", null, "Keys are unique.", "It changes the value."]]
],
"sets-comprehensions": [
 [null, ["Duplicates are removed.", null, "1, 2 and 3 are distinct values.", "There are three unique values."]],
 [null, ["That's the union (|).", null, "That's {22, 80} - {80, 443}.", "That's {80, 443} - {22, 80}."]],
 [null, ["{} is an empty dict.", "[] is an empty list.", null, "() is an empty tuple."]],
 [null, ["1 is filtered out by n > 1.", null, "They're doubled, not just filtered.", "That's the original list."]]
],
"functions": [
 [null, ["No implicit 0.", "No implicit empty string.", null, "No error is raised."]],
 [null, ["y has a default value.", null, "The default is 2, not None.", "x is 5; y stays 2."]],
 [null, ["They're very different.", null, "That's backwards.", "print stores nothing."]],
 [null, ["Use the global keyword if you really need that.", null, "Each function has its own locals.", "Variables live in memory only."]]
],
"modules": [
 [null, ["You must say which module dumps comes from.", null, "import json.dumps is invalid; dumps isn't a module.", "Invalid syntax."]],
 [null, ["Not when the file is imported.", null, "That's the opposite.", "It runs when you execute the file directly."]],
 [null, ["The network isn't involved in imports.", null, "requests is actively maintained.", "This happens on any Python version."]],
 [null, ["boto3 is installed from PyPI.", "requests is installed from PyPI.", null, "anthropic is installed from PyPI."]]
],
"errors": [
 [null, ["The first line is just \"Traceback (most recent call last)\".", null, "The middle shows the call path; useful, but not the cause.", "Tracebacks are very informative."]],
 [null, ["TypeError means the wrong type, like int(None).", null, "KeyError is a missing dict key.", "NameError is an unknown variable."]],
 [null, ["try runs until an error happens.", "except runs only on errors.", "else runs only when there's no error.", null]],
 [null, ["Speed isn't the issue.", null, "It's valid syntax.", "It catches errors; it doesn't raise them."]]
],
"classes": [
 [null, ["The class is Server; self is one instance of it.", null, "Globals have nothing to do with self.", "The parent is reached with super()."]],
 [null, ["Defining the class doesn't run __init__.", null, "Printing calls __str__ or __repr__.", "It runs automatically on creation."]],
 [null, ["It's an object, not a string.", null, "boto3 is the module; the client is an object.", "It has methods, not just keys."]],
 [null, ["Nested dicts get messy.", null, "Globals make code hard to reason about.", "Tuples of lists have no field names."]]
],
"files": [
 [null, ["Speed is the same.", null, "No encryption is involved.", "CSV works without it, but with is best practice."]],
 [null, ["\"w\" truncates (erases) the file first.", "\"r\" is read only.", null, "\"x\" creates a new file and fails if it exists."]],
 [null, ["Hard-coded / breaks on Windows paths.", null, "There's no built-in join() like that (os.path.join is the older alternative).", "Invalid code."]],
 [null, ["Convert with float() yourself.", "Convert with int() yourself.", null, "Use Decimal() yourself if needed."]]
],
"apis": [
 [null, ["json.load reads from a file.", null, "json.dumps converts dict to string.", "requests fetches URLs."]],
 [null, ["A crash would be 5xx.", null, "A wrong path is usually 404.", "Success is 2xx."]],
 [null, ["data= sends form-encoded data, not JSON.", null, "GET requests don't send a body this way.", "requests.send doesn't exist."]],
 [null, ["It's optional syntax, and that's the trap.", null, "Timeouts don't speed downloads.", "Auth is a separate parameter."]]
],
"secrets-config": [
 [null, ["os.environ[\"X\"] raises KeyError if missing.", null, "os.getenv is a function: os.getenv(\"X\", \"default\").", "Not valid Python."]],
 [null, [".env contains real secrets.", null, "Never commit .env.", "Commit the example so others know which keys are needed."]],
 [null, ["Hard-coded secrets end up in Git.", null, "Email isn't a secret store.", "Function names are visible to anyone."]],
 [null, ["History, forks and bots already have it.", null, "Making it private doesn't revoke copies already made.", "A live leaked key will be abused."]]
],
"automation-scripts": [
 [null, ["String commands let input inject shell code.", null, "shell=True with input is injectable.", "eval runs arbitrary Python."]],
 [null, ["DEBUG is for detailed diagnostics.", null, "CRITICAL means the program may stop.", "print isn't a logging level."]],
 [null, ["1 signals a general error.", null, "-1 wraps to 255, an error.", "200 is an HTTP status, not an exit code."]],
 [null, ["Bare python may be missing or the wrong version in cron's minimal PATH.", null, "Python 2 is end-of-life.", "pip installs packages; it doesn't run scripts."]]
],
"security": [
 [null, ["random is predictable, so it isn't safe for security.", null, "Time-based values are guessable.", "uuid1 contains the MAC address and time."]],
 [null, ["Plain text is readable by anyone who gets the database.", "Fast hashes can be brute-forced quickly.", null, "Base64 is encoding, easily reversed."]],
 [null, ["Letters are matched by [a-zA-Z] or \\w.", null, "A literal dot is \\.", "Whitespace is \\s."]],
 [null, ["Any change alters the hash.", "There's no partial similarity in secure hashes.", null, "Hashes always have a fixed length."]]
],
"boto3": [
 [null, ["Keys in code leak through Git.", null, "Root keys must never be used.", "Plain text files are easy to leak."]],
 [null, ["boto3 methods are lowercase snake_case.", null, "camelCase is JavaScript SDK style.", "Not the boto3 client API."]],
 [null, ["Paginators don't change CPU speed.", null, "Sorting is up to you.", "Auth is handled by credentials."]],
 [null, ["A network problem raises a connection error, not AccessDenied.", null, "Buckets don't get full.", "Python bugs raise Python exceptions."]]
],
"lambda": [
 [null, ["It isn't pre-parsed for proxy integrations.", null, "It's text (base64 only when isBase64Encoded is true).", "It's present whenever the client sends a body."]],
 [null, ["Lambda allows much more than 1 minute.", null, "1 hour exceeds the limit.", "There's a hard limit of 15 minutes."]],
 [null, ["Output is captured.", null, "S3 isn't the default log destination.", "Lambda doesn't email logs."]],
 [null, ["Names don't grant access.", null, "Memory affects performance, not permissions.", "The Region doesn't grant access."]]
],
"fastapi-ai": [
 [null, ["Regex isn't how FastAPI validates.", null, "print doesn't validate.", "uvicorn is the server that runs the app."]],
 [null, ["The message object has no .text attribute.", null, "The response isn't a dict with a reply key.", "choices is the OpenAI response shape."]],
 [null, ["Never hard-code API keys.", null, "Cookies aren't used.", "Model names aren't credentials."]],
 [null, ["/help isn't a default route.", null, "Not a route.", "Not a default route."]]
]
};

/* merge into the lessons (loaded after lessons, before app.js) */
(function (E) { (window.LESSONS || []).forEach(l => { const x = E[l.id]; if (!x || !l.quiz) return; x.forEach((e, i) => { const q = l.quiz[i]; if (!q || !e) return; if (e[0]) q.why = e[0]; if (e[1]) q.w = e[1]; }); }); })(window.EXPLAIN || {});
