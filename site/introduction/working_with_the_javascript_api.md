---
title: Working with the JavaScript API
---

## What is the JavaScript API?

If you've used Adobe Animate, you might know about ActionScript, which helps you create interactive content for your animations when they play in a browser. The Animate JavaScript API (JSAPI) is a different but complementary tool. It lets you write scripts that run directly inside the Animate authoring tool itself.

Think of it this way:

- **ActionScript** runs when your audience views your final animation (in the Flash Player or browser).
- **The JSAPI** runs while you are *building* your animation in Animate.

With the JSAPI, you can create scripts to automate repetitive tasks, build custom tools for the Tools panel, and streamline your entire workflow. It's all about making your job as a developer or designer easier.

This is different from the JavaScript you might use to build websites. While it uses the same core language, the JSAPI has special objects and functions that are unique to Animate, allowing you to control things like the timeline, library, and drawing tools.

## What is a JSFL File?

JSAPI scripts are saved in files with a `.jsfl` extension. JSFL stands for "JavaScript Flash Language". You can write these files using Animate's built-in script editor or your favorite code editor like VS Code.

To create a new JSFL file in Animate:

1. Go to *`File > New...`*.
2. In the **"Advanced"** tab, select **"JSFL Script File"** and click the **Create** button.

## Getting Started: Your First Script

Let's create a simple "Hello World" script. This script will open the Output panel in Animate and print a message.

1. Create a new JSFL file.
2. Type the following code into the script window:

    ```javascript
    // This line prints a message to the Output panel.
    fl.trace("Hello, Animate!");
    ```

3. To run it, click the **Run Script** button (a small "play" icon) in the Script window's toolbar.

If the Output panel isn't open, Animate will open it for you, and you'll see your message! This simple {@link Flash.Flash.trace | `fl.trace()`} command is incredibly useful for testing and debugging your scripts.

## Saving and Running Your Scripts

### Where is `Configuration` directory?

To use your scripts easily, you need to save them in the right place. Animate looks for scripts in specific folders inside its `Configuration` directory.

You can find your `Configuration` directory here:

- **Windows:** `C:\Users\<YourUsername>\AppData\Local\Adobe\Animate <Version>\<Language>\Configuration\`
- **macOS:** `~/Library/Application Support/Adobe/Animate <Version>/<Language>/Configuration/`

You can also find this path by running the following script:

```javascript
fl.trace(fl.configDirectory);
```

### Where to Save Your Files

Inside the `Configuration` directory, there are two important folders for your scripts:

- **`Commands`**: Scripts saved here will appear in the **Commands** menu in Animate. This is perfect for scripts you want to run manually.
- **`Tools`**: Scripts saved here can be added as new tools to your Tools panel.

If you save a new script in the `Commands` folder, it will be available from the menu immediately. If you edit an existing tool script, you may need to restart Animate or use the {@link Flash.Flash.reloadTools | `fl.reloadTools()`} command for the changes to take effect.

## How to Run Scripts

There are several ways to run a JSFL script:

**1. While Editing:**

- Click the **Run Script** button in the script editor.
- Right-click in the script editor and choose **Run Script**.

**2. From the Commands Menu:**

- If you saved your script in the `Commands` folder, just go to *`Commands > Your Script Name`*.
- You can even assign a keyboard shortcut to it via *`Edit > Keyboard Shortcuts`*.

**3. From Anywhere on Your Computer:**

- In Animate, select *`Commands > Run Command...`* and browse to your `.jsfl` file.
- From within another script, use the {@link Flash.Flash.runScript | `fl.runScript()`} command:

    ```javascript
    // This runs another JSFL file.
    fl.runScript("file:///C|/path/to/my/script.jsfl");
    ```

**4. From the Command Line (for advanced automation):**
You can launch Animate and run a script automatically from your system's command line.

Here is an example of running **Adobe Animate 2024** from the command line:

- **Windows:**

    ```batch
    "C:\Program Files\Adobe\Adobe Animate 2024\Animate.exe" "path\to\script.jsfl"
    ```

- **macOS (Terminal):**

    ```bash
    /Applications/Adobe Animate 2024/Animate.app/Contents/MacOS/Animate /path/to/script.jsfl
    ```
