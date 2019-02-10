// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import replaceQuotes from './replace';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "replacequotes" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const ReplaceSingle : vscode.Disposable = vscode.commands.registerCommand('extension.ReplaceSingle', () => {
		// The code you place here will be executed every time your command is executed
		if (vscode.window.activeTextEditor !== undefined){
			const textEditor = vscode.window.activeTextEditor;
			replaceQuotes(textEditor,true);
		} 
		
	});
	const ReplaceDouble = vscode.commands.registerCommand('extension.ReplaceSingle', () => {
		if (vscode.window.activeTextEditor !== undefined){
			const textEditor = vscode.window.activeTextEditor;
			replaceQuotes(textEditor,false);
		} 
	});

	const commands = [ReplaceSingle,ReplaceDouble];

	for (const command of commands){
		context.subscriptions.push(command);
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}