/* --------------------------------------------------------------------------------------------
 * Copyright (c) Cloudify Platform LTD. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export const name = 'tosca_definitions_version';
export const keywords = [
    'cloudify_dsl_1_3',
    'cloudify_dsl_1_4',
    'cloudify_dsl_1_5',
];

export class Validator {
    version:string;
    constructor (version:string) {
        this.version = version;
    }
    toString() {
        if (this.version == null) {
            return '';
        }
        return this.version;
    }
}
