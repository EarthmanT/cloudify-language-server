/* --------------------------------------------------------------------------------------------
 * Copyright (c) Cloudify Platform LTD. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export const name = 'inputs';
export const keywords = [
    'default',
    'description',
    'display_label',
    'required',
    'type',
];
export const inputTypes = [
    'string',
    'integer',
    'boolean',
    'dict',
    'list'
];

export class InputItem {
    raw;
    name:string;
    type:string;
    description:string;
    default:null|number|string|[]|object;
    required:boolean;

    constructor(raw:null|object) {
        if (raw == null) {
            raw = {};
        }

        this.raw = raw;

        this.name = '';
        this.type = '';
        this.description = '';
        this.default = null;
        this.required = false;
        this.assign();

    }

    assign=()=>{
        const input = Object(this.raw);
        for (const key of Object.keys(this.raw)) {          
            if (key == 'name') {
                this.name = input[key];
            } else if (key == 'type') {
                this.type = input[key];
            } else if (key == 'description') {
                this.description = input[key];
            } else if (key == 'default') {
                this.default = input[key];
            } else if (key == 'required') {
                this.required = input[key];
            }
        }
    };
}

export interface InputItems<T> {
    [key: string]: T;
}

export class Validator {
    raw;
    contents:InputItems<InputItem>;
    constructor(raw:null|object|string) {
        if (raw == null) {
            raw = {};
        } else if (typeof raw === 'string') {
            raw = {};
        }
        this.raw = raw;
        this.contents = Object();
        this.assign();
        // console.log('inputs: ' + this.contents);
    }
    assign=()=>{
        const inputs = Object(this.raw);
        for (const key of Object.keys(this.raw)) {
            this.contents[key] = new InputItem(inputs[key]);
        }
    };
}
