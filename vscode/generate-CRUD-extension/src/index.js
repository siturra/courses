// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const helloWorld = require('./commands/helloWorld');
const generateCRUD = require('./commands/generateCRUD');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "my-first-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const commands = [
		vscode.commands.registerCommand('my-first-extension.helloWorld', helloWorld),
		vscode.commands.registerCommand('my-first-extension.generateCRUD', generateCRUD)
	]

	context.subscriptions.push(commands);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
