/* --------------------------------------------------------------------------------------------
 * Copyright (c) Cloudify Platform LTD. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { deactivate } from './../extension';
import {expect, test} from '@jest/globals';

test('test calling activate', () => {
    expect(deactivate()).toBe(undefined);
});
