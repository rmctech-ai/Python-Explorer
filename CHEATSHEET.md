# Python Cheat Sheet

_Auto-generated from the Python Explorer lessons. One master memory hook + the key commands per lesson._

## 01 · Meet Python

> ★ "Python reads like English and runs top to bottom." One line, one instruction.

| Command | What it does |
|---|---|
| `python3` | open REPL (>>>) |
| `python3 app.py` | run a script |
| `print("hi")` | show output |
| `# note` | comment |
| `if x:\n    ...` | colon + 4-space indent |
| `exit()` | leave the REPL |

**Memory hooks:**

- **What Python is**: Top to bottom, one line at a time.
- **REPL vs script**: REPL to try, .py to keep. In the REPL, exit() or Ctrl+D quits.
- **print() & comments**: print() speaks, # whispers.
- **Indentation matters**: "Colon opens, indent belongs." Always 4 spaces.
- **Why Python for your path**: "One language, four doors: Cloud, Automate, AI, Secure."

## 02 · Set Up Like a Pro

> ★ "New project → new venv." Folder, venv, packages, .env, .gitignore, run.

| Command | What it does |
|---|---|
| `uv init name` | new project |
| `uv add pkg` | install + record |
| `uv run main.py` | run in venv |
| `python3 -m venv .venv` | classic venv |
| `source .venv/bin/activate` | activate (Mac/Linux) |
| `pip freeze > requirements.txt` | save deps |
| `uv run ruff format .` | auto-format |

**Memory hooks:**

- **Install & check**: Check the version first. 3.12+ is the goal.
- **Project + virtual env**: One project, one venv. Never install project packages globally.
- **Install packages**: Add it, lock it, share it.
- **.env & .gitignore**: Keys in .env, .env in .gitignore.
- **Run, format, lint**: Format, check, run.

## 03 · Variables & Types

> ★ A variable is a label, not a box. The = sign means "stick this label on that object".

| Command | What it does |
|---|---|
| `x = 5` | assign |
| `type(x)` | what type? |
| `int float str bool None` | core types |
| `x += 1` | add and re-assign |
| `a is b` | same object? |
| `snake_case / UPPER_CASE` | naming |

**Memory hooks:**

- **Assign with =**: Read = as "gets". x = 5 → "x gets 5".
- **The core types**: "I Float Strings, Bool None": int, float, str, bool, None.
- **Re-assign = move the label**: Re-assigning moves the label; it doesn't change the old object.
- **Two labels, one object**: = never copies. It adds a label.
- **Naming rules**: snake_case for things, UPPER_CASE for constants.

## 04 · Strings & f-strings

> ★ f-string = fill-in-the-blanks. f"Hi {name}": the curly braces are the blanks.

| Command | What it does |
|---|---|
| `s[0] s[-1] s[a:b]` | index & slice |
| `s.strip().lower()` | clean |
| `s.split(",")` | to list |
| `",".join(lst)` | to string |
| `f"{x:.2f}"` | f-string, 2 decimals |
| `"x" in s · len(s)` | contains · length |

**Memory hooks:**

- **Making strings**: Quotes make text. Triple quotes make paragraphs.
- **Index & slice**: Start at zero; stop is not included.
- **String methods**: Clean = strip + lower. Split to break, join to glue.
- **f-strings**: f for "fill". :.2f = 2 decimals.
- **Checks & length**: "needle" in haystack → True or False.

## 05 · Numbers, Operators & Input

> ★ "Text in, convert, then compute." input() and most files give you strings.

| Command | What it does |
|---|---|
| `/ // % **` | divide, floor, remainder, power |
| `int("5") float("1.5") str(5)` | convert |
| `== != < >` | compare |
| `and or not` | combine |
| `round(x, 2)` | round |
| `int(input("? "))` | number from user |

**Memory hooks:**

- **Arithmetic**: // = full boxes, % = leftovers. Single / always gives a float.
- **Converting types**: Convert at the border. Change type as soon as data enters your program.
- **Comparisons**: One = gives, two == asks.
- **and · or · not**: and = both, or = either, not = flip.
- **input() gives text**: input() → str. Always.

## 06 · Decisions: if / elif / else

> ★ "If this, do that; elif maybe this; else fallback." Only ONE branch runs.

| Command | What it does |
|---|---|
| `if x:\n    ...` | run if True |
| `elif y:` | else-if |
| `else:` | fallback |
| `if not x:` | if empty/missing |
| `A if c else B` | one-line choice |
| `match v: case 1: ...` | pattern match |

**Memory hooks:**

- **if**: if + condition + colon + indent.
- **elif & else**: First True wins. Most severe check first.
- **Truthiness**: Empty = False. Something = True.
- **Combine & nest**: Flat is better than nested. (from "The Zen of Python")
- **One-line choices**: A if test else B.

## 07 · Loops: for & while

> ★ for = "for each thing"; while = "until it's done".

| Command | What it does |
|---|---|
| `for x in items:` | each item |
| `for i in range(5):` | 0..4 |
| `while cond:` | repeat while True |
| `break / continue` | stop / skip |
| `for i, x in enumerate(items):` | with index |
| `for a, b in zip(l1, l2):` | pairs |

**Memory hooks:**

- **for each item**: "For each s in servers, do this." Read it as a sentence.
- **range()**: range(n) gives n numbers starting at 0.
- **while**: while needs an exit. Change the condition inside, or add a limit.
- **break & continue**: continue skips one, break stops all.
- **enumerate, zip, accumulate**: Need a counter? enumerate. Two lists? zip.

## 08 · Lists

> ★ A list is a numbered shelf you can rearrange. Square brackets, positions from 0.

| Command | What it does |
|---|---|
| `[a, b, c]` | make list |
| `lst[0] lst[-1] lst[1:3]` | index/slice |
| `.append(x) .remove(x) .pop()` | change |
| `sorted(lst) / lst.sort()` | sort copy / in place |
| `x in lst · len(lst)` | search · count |
| `lst.copy()` | independent copy |

**Memory hooks:**

- **Create & index**: Brackets build lists; [0] is first, [-1] is last.
- **Change it**: append = add to the end. The one you'll use 90% of the time.
- **Sort & search**: sorted() = new copy, .sort() = in place (returns None).
- **The aliasing trap**: Want a copy? Say .copy().
- **Lists of lists**: [row][column]. Unpack with commas on the left.

## 09 · Dictionaries

> ★ A dict is a contact list: look up by name, get the number. Curly braces, key: value.

| Command | What it does |
|---|---|
| `{"k": v}` | make dict |
| `d["k"]` | read (KeyError if missing) |
| `d.get("k", default)` | safe read |
| `d["k"] = v` | add/update |
| `for k, v in d.items():` | loop pairs |
| `d["a"][0]["b"]` | nested access |

**Memory hooks:**

- **Create & read**: Brackets with a key, not a number. d["ip"].
- **Safe reads: .get()**: Unsure the key exists? .get() it.
- **Add, update, delete**: Assign to a key to add or change it.
- **Loop through a dict**: Need both? .items().
- **Nested data = JSON**: Curly = look up by name, square = pick by number. Peel one layer at a time.

## 10 · Tuples, Sets & Comprehensions

> ★ Tuple = sealed envelope. Set = guest list with no duplicates. Comprehension = loop in one line.

| Command | What it does |
|---|---|
| `(a, b)` | tuple |
| `set(lst) / {a, b}` | set (unique) |
| `a \| b  a & b  a - b` | union, both, difference |
| `[f(x) for x in xs if c]` | list comprehension |
| `{k: v for ...}` | dict comprehension |
| `set()` | empty set |

**Memory hooks:**

- **Tuples**: Round brackets = sealed.
- **Sets**: Duplicates? Throw it in a set().
- **Set math**: | = OR (either), & = AND (both), - = "but not".
- **List comprehensions**: [what  for  each  in  where  if  filter]
- **Dict & set comprehensions**: Square → list, curly with colon → dict, curly without → set.

## 11 · Functions

> ★ A function is a vending machine: inputs in, one result out. def to build it, () to use it.

| Command | What it does |
|---|---|
| `def f(a, b=1):` | define (b optional) |
| `return x` | give back |
| `f(1, b=2)` | call with keyword |
| `def f(*args, **kwargs):` | any inputs |
| `"""docstring"""` | document |
| `def f(x: int) -> str:` | type hints |

**Memory hooks:**

- **def & call**: def defines, () calls.
- **return**: print shows, return gives.
- **Parameters, defaults, keywords**: Defaults for the usual, keywords for clarity.
- **Scope**: Inside stays inside. Pass in, return out.
- **Docstrings & type hints**: One function, one job, one docstring.

## 12 · Modules & Packages

> ★ import = borrow tools from another file. Standard library first, PyPI second, your own files third.

| Command | What it does |
|---|---|
| `import json` | import module |
| `from x import y` | import a name |
| `import x as y` | alias |
| `if __name__ == "__main__":` | script-only block |
| `from pkg.mod import f` | from a package |
| `collections.Counter` | count things |

**Memory hooks:**

- **import basics**: import the box, or from-box import the tool.
- **Batteries included**: Check the stdlib before pip install.
- **Your own modules**: Tools at the top, "__main__" at the bottom.
- **Packages**: Dots in imports = folders.
- **Import errors**: Not installed, wrong venv, or name clash.

## 13 · Errors & Exceptions

> ★ Read tracebacks bottom-up. The last line says WHAT broke; the line above says WHERE.

| Command | What it does |
|---|---|
| `try: ... except E as e:` | catch specific error |
| `else: / finally:` | success / always |
| `raise ValueError("msg")` | raise your own |
| `raise` | re-raise inside except |
| `class MyError(Exception): pass` | custom exception |
| `Read bottom-up` | traceback tip |

**Memory hooks:**

- **Read a traceback**: Bottom = what, above = where.
- **try / except**: Try the risky thing; except the specific failure.
- **else & finally**: try → except (fail) → else (success) → finally (always).
- **raise your own**: Fail early, fail loudly.
- **Retry pattern**: Retry with backoff, with a limit.

## 14 · Classes & Objects

> ★ Class = blueprint, object = the house built from it. self = "this particular house".

| Command | What it does |
|---|---|
| `class C:` | define blueprint |
| `def __init__(self, x):` | setup |
| `self.x = x` | attribute |
| `obj = C(1)` | create instance |
| `obj.method()` | call method |
| `@dataclass` | auto __init__/__repr__ |

**Memory hooks:**

- **Blueprint & instances**: __init__ = move-in day. self = "this one".
- **Methods**: obj.method() means "do it to THIS object".
- **Nice printing**: Dunder = double underscore = Python's hooks.
- **Inheritance**: Child(Parent) = everything the parent has, plus more.
- **dataclasses & SDK objects**: Data only? @dataclass. SDK client = object; .method() = action.

## 15 · Files, Paths & CSV

> ★ "with open" = borrow the file and auto-return it. Path("folder") / "file" builds paths on any OS.

| Command | What it does |
|---|---|
| `with open(p, "w") as f:` | write (overwrite) |
| `with open(p) as f: f.read()` | read |
| `for line in f:` | line by line |
| `Path("a") / "b.txt"` | build path |
| `Path(".").glob("*.csv")` | find files |
| `csv.DictReader(f)` | rows as dicts |

**Memory hooks:**

- **Write & read text**: "w" wipes, "a" adds, "r" reads. Same logic as > and >> in Linux.
- **pathlib basics**: Path / "name" builds paths. Never glue paths with + strings.
- **Walk folders**: glob to find, rename to move, unlink to delete.
- **CSV files**: CSV rows are dicts of strings. Convert numbers!
- **Robust file automation**: Expect missing files; write temp, then rename.

## 16 · JSON & APIs with requests

> ★ Request = order slip, Response = the tray that comes back. Check the status code before eating.

| Command | What it does |
|---|---|
| `json.loads(s) / json.dumps(o)` | JSON ⇄ Python |
| `requests.get(url, params=..., timeout=10)` | GET |
| `requests.post(url, json=data, timeout=10)` | POST JSON |
| `r.status_code · r.json()` | check & parse |
| `r.raise_for_status()` | error on 4xx/5xx |
| `headers={"Authorization": f"Bearer {t}"}` | auth |

**Memory hooks:**

- **JSON ⇄ Python**: loads = Load String in, dumps = Dump String out. The "s" means string.
- **GET a resource**: 2 good, 4 you, 5 them. And always timeout=.
- **POST JSON**: GET reads, POST creates. (PUT/PATCH update, DELETE removes.)
- **Headers & auth**: Keys go in headers, headers come from env vars.
- **Webhooks & pagination**: Webhook = doorbell for n8n. Paging = loop until no "next".

## 17 · Secrets & Config

> ★ "Code is public, config is per place, secrets are private."

| Command | What it does |
|---|---|
| `os.environ["KEY"]` | required (KeyError if missing) |
| `os.environ.get("KEY", "def")` | optional |
| `load_dotenv()` | read .env |
| `.env.example` | document keys |
| `sm.get_secret_value(SecretId=...)` | AWS Secrets Manager |
| `secret[:4] + "****"` | mask in logs |

**Memory hooks:**

- **Environment variables**: Required → os.environ["X"]. Optional → .get("X", default).
- **.env with python-dotenv**: .env stays home; .env.example travels.
- **A config module**: One config file, validated at start-up.
- **Cloud secrets**: Cloud secrets: vault + role, never files.
- **Never leak secrets**: Mask it, ignore it, scan it, rotate it.

## 18 · Automation Scripts

> ★ Flags in, logs out, exit code at the end, schedule it.

| Command | What it does |
|---|---|
| `argparse.ArgumentParser()` | CLI options |
| `logging.basicConfig(level=logging.INFO)` | set up logs |
| `log.info / warning / exception` | log levels |
| `subprocess.run([...], check=True)` | run commands |
| `sys.exit(main())` | exit code |
| `cron: full path to .venv/bin/python` | schedule |

**Memory hooks:**

- **argparse**: --flag = a switch, --option VALUE = a dial.
- **logging, not print**: Debug, Info, Warning, Error, Critical → "Don't Ignore Warnings, Errors Cost".
- **subprocess**: List of args, check=True, never shell=True with user input.
- **main() & exit codes**: main() returns 0 or 1; sys.exit passes it on.
- **Schedule it**: Use the venv's python, full paths, and log to a file.

## 19 · Python for Security

> ★ "Find it (regex), prove it (hash), protect it (secrets), check it (sockets)."

| Command | What it does |
|---|---|
| `re.search(r"(\S+)", s).group(1)` | extract |
| `re.findall(pattern, text)` | all matches |
| `Counter(x).most_common(5)` | top N |
| `hashlib.sha256(b).hexdigest()` | fingerprint |
| `secrets.token_urlsafe(32)` | secure token |
| `socket.create_connection((h, p), timeout=2)` | port check |

**Memory hooks:**

- **Regex: pull data out of text**: \d digit, \S non-space, + "one or more", ( ) "keep this".
- **Brute-force detector**: Extract → count → threshold → alert.
- **Hashing for integrity**: Same data → same hash. One byte changed → totally different hash.
- **Secrets & passwords**: Security randomness = secrets, not random. Passwords = slow salted hash.
- **Port checks with socket**: Check your own doors before someone else does.

## 20 · AWS with boto3

> ★ client = boto3.client("service"); client.verb_noun(Param=Value). That one pattern covers 200+ services.

| Command | What it does |
|---|---|
| `boto3.client("s3", region_name="...")` | create client |
| `sts.get_caller_identity()` | who am I? |
| `s3.upload_file(file, bucket, key)` | upload |
| `ec2.describe_instances(Filters=[...])` | find instances |
| `client.get_paginator("op").paginate()` | all pages |
| `except ClientError as e: e.response["Error"]["Code"]` | AWS errors |

**Memory hooks:**

- **Credentials, the safe way**: Roles, not keys. Code should never contain AKIA….
- **Clients & regions**: snake_case methods, PascalCase params, dict responses.
- **S3: list, upload, download**: Bucket = warehouse, Key = label, Body = contents.
- **EC2: find & act**: Reservations → Instances → InstanceId. Paginate anything that lists.
- **Handle AWS errors**: Read e.response["Error"]["Code"], then fix the IAM policy.

## 21 · AWS Lambda in Python

> ★ def lambda_handler(event, context): return response. Event in, result out, no server to babysit.

| Command | What it does |
|---|---|
| `def lambda_handler(event, context):` | entry point |
| `json.loads(event["body"])` | HTTP body |
| `event["Records"][0]["s3"]` | S3 trigger |
| `{"statusCode": 200, "body": json.dumps(x)}` | HTTP response |
| `os.environ["X"]` | config |
| `15 min · /tmp · layers` | limits |

**Memory hooks:**

- **The handler**: Event in, return out.
- **Event shapes**: API body is a string; S3 info is in Records[0].
- **HTTP responses**: body = json.dumps(...), always a string.
- **Logs, config, permissions**: Logs → CloudWatch, config → env vars, power → execution role.
- **Limits & packaging**: 15 min max, /tmp only, layers for packages.

## 22 · FastAPI + Claude API

> ★ Route + Model + Client = AI API. FastAPI routes, Pydantic models, Anthropic client.

| Command | What it does |
|---|---|
| `app = FastAPI()` | create app |
| `@app.get("/x") / @app.post("/x")` | routes |
| `class In(BaseModel): text: str` | validated body |
| `uvicorn main:app --reload` | run server |
| `client.messages.create(model=..., max_tokens=..., messages=[...])` | call Claude |
| `msg.content[0].text` | reply text |

**Memory hooks:**

- **First FastAPI app**: Decorator picks the URL; the function is the answer.
- **Pydantic models**: Type hints become validation.
- **Call Claude**: messages = list of {"role", "content"} dicts. Answer in msg.content[0].text.
- **The AI endpoint**: Validate in, call model, shape out.
- **Secure & deploy**: Authenticate callers, hide your keys, then ship.

