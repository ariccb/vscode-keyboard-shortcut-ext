# Shortcut Learning - For Mac

An extension to learn VS Code shortcuts for Mac by notifying you of keyboard shortcuts for commands you use.

## Features

This extension helps you learn VS Code keyboard shortcuts by:

1. Monitoring the commands you execute in VS Code.
2. Notifying you of the corresponding keyboard shortcut when you use a command that has one.
3. Supporting both default VS Code keybindings and custom user keybindings.

## How it works

When you execute a command in VS Code (e.g., through the Command Palette or by clicking a menu item), the extension will check if there's a keyboard shortcut associated with that command. If there is, it will show a notification with the command name and its keyboard shortcut.

## Custom Keybindings

This extension supports reading your custom keybindings. When enabled, it will provide notifications for commands you use with their associated keyboard shortcuts, helping you learn your personalized shortcuts.

To enable this feature:

1. Open VS Code settings
2. Search for "Shortcut Learning"
3. Check the box for "Use Custom Keybindings"
4. Restart VS Code

Note: Enabling this feature allows the extension to read your custom keybindings file and monitor command executions. This is done to provide personalized shortcut suggestions and may have a slight impact on performance. Your privacy and system resources are respected, and no data is collected or sent outside your local machine.

## Credits

This extension is based on the original work by Monil Patel (https://github.com/monil-patel/vscode-keyboard-shortcut-ext). The original concept and base implementation have been modified and extended to provide a different learning approach.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
