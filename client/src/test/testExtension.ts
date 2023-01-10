/* --------------------------------------------------------------------------------------------
 * Copyright (c) Cloudify Platform LTD. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { ExtensionContext } from 'vscode';
import { activate, deactivate } from './../extension';

test('test calling activate', () => {
    const context = {} as ExtensionContext;
    activate(context);
    deactivate();
});
