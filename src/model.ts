// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  IChangedArgs, Property
} from 'phosphor-properties';

import {
  ISignal, Signal
} from 'phosphor-signaling';


/**
 * Interface that must be implemented to set defaults on an EditorModel.
 */
export
interface IEditorOptions {
  /**
   * The initial text in the text editor.
   */
  text?: string;

  /**
   * The mimetype of the text.
   *
   * #### Notes
   * The mimetype is used to set the syntax highlighting, for example.
   */
  mimetype?: string;

  /**
   * The filename of the editor.
   */
  filename?: string;

  /**
   * Whether the text editor has a fixed maximum height.
   */
  fixedHeight?: boolean;

  /**
   * A flag to determine whether to show line numbers.
   */
  lineNumbers?: boolean;

  /**
   * A flag to determine whether to allow editing.
   */
  readOnly?: boolean;

  /**
   * The number of spaces to insert for each tab.
   */
  tabSize?: number;
}


/**
 * An implementation of an editor model.
 */
export
class EditorModel  {

  /**
   * Construct an Editor Model.
   */
  constructor(options?: IEditorOptions) {
    if (options) EditorModelPrivate.initFrom(this, options);
  }

  /**
   * A signal emitted when the editor model state changes.
   *
   * #### Notes
   * This is a pure delegate to the [[stateChangedSignal]].
   */
  get stateChanged(): ISignal<EditorModel, IChangedArgs<any>> {
    return EditorModelPrivate.stateChangedSignal.bind(this);
  }

  /**
   * Get the mode for the editor filename.
   */
  get filename(): string {
    return EditorModelPrivate.filenameProperty.get(this);
  }

  /**
   * Set the text for the editor filename.
   */
  set filename(value: string) {
    EditorModelPrivate.filenameProperty.set(this, value);
  }

  /**
   * Get whether the editor height should be constrained.
   */
  get fixedHeight() {
    return EditorModelPrivate.fixedHeightProperty.get(this);
  }

  /**
   * Set whether the editor height should be constrained.
   */
  set fixedHeight(value: boolean) {
    EditorModelPrivate.fixedHeightProperty.set(this, value);
  }

  /**
   * Get the mode for the editor mimetype.
   */
  get mimetype(): string {
    return EditorModelPrivate.mimetypeProperty.get(this);
  }

  /**
   * Set the text for the editor mimetype.
   */
  set mimetype(value: string) {
    EditorModelPrivate.mimetypeProperty.set(this, value);
  }

  /**
   * Get the lineNumbers flag for the editor model.
   */
  get lineNumbers(): boolean {
    return EditorModelPrivate.lineNumbersProperty.get(this);
  }

  /**
   * Set the lineNumbers flag for the editor model.
   */
  set lineNumbers(value: boolean) {
    EditorModelPrivate.lineNumbersProperty.set(this, value);
  }

  /**
   * Get the readOnly flag for the editor model.
   */
  get readOnly(): boolean {
    return EditorModelPrivate.readOnlyProperty.get(this);
  }

  /**
   * Set the readOnly flag for the editor model.
   */
  set readOnly(value: boolean) {
    EditorModelPrivate.readOnlyProperty.set(this, value);
  }

  /**
   * Get the tabSize number for the editor model.
   */
  get tabSize(): number {
    return EditorModelPrivate.tabSizeProperty.get(this);
  }

  /**
   * Set the tabSize number for the editor model.
   */
  set tabSize(value: number) {
    EditorModelPrivate.tabSizeProperty.set(this, value);
  }

  /**
   * Get the text of the editor model.
   */
  get text(): string {
    return EditorModelPrivate.textProperty.get(this);
  }

  /**
   * Set the text on the editor model.
   */
  set text(value: string) {
    EditorModelPrivate.textProperty.set(this, value);
  }
}


/**
 * The namespace for the `EditorModel` class private data.
 */
namespace EditorModelPrivate {

  /**
   * A signal emitted when the editor state changes.
   */
  export
  const stateChangedSignal = new Signal<EditorModel, IChangedArgs<any>>();

  /**
   * The property descriptor for the editor mimetype.
   */
  export
  const mimetypeProperty = new Property<EditorModel, string>({
    name: 'mimetype',
    value: '',
    notify: EditorModelPrivate.stateChangedSignal
  });

  /**
   * The property descriptor for the editor filename.
   */
  export
  const filenameProperty = new Property<EditorModel, string>({
    name: 'filename',
    value: '',
    notify: EditorModelPrivate.stateChangedSignal
  });

  /**
  * A property descriptor which determines whether the editor height should be constrained.
  */
  export
  const fixedHeightProperty = new Property<EditorModel, boolean>({
    name: 'fixedHeight',
    notify: EditorModelPrivate.stateChangedSignal,
    value: false,
  });

  /**
   * The property descriptor for the editor lineNumbers flag.
   */
  export
  const lineNumbersProperty = new Property<EditorModel, boolean>({
    name: 'lineNumbers',
    value: true,
    notify: EditorModelPrivate.stateChangedSignal
  });

  /**
   * The property descriptor for the editor readOnly flag.
   */
  export
  const readOnlyProperty = new Property<EditorModel, boolean>({
    name: 'readOnly',
    value: false,
    notify: EditorModelPrivate.stateChangedSignal
  });

  /**
   * The property descriptor for the editor text.
   */
  export
  const textProperty = new Property<EditorModel, string>({
    name: 'text',
    value: '',
    notify: EditorModelPrivate.stateChangedSignal
  });

  /**
   * The property descriptor for the editor tabSize number.
   */
  export
  const tabSizeProperty = new Property<EditorModel, number>({
    name: 'tabSize',
    value: 4,
    notify: EditorModelPrivate.stateChangedSignal
  });

  /**
   * Initialize an editor view model from an options object.
   */
  export
  function initFrom(model: EditorModel, options: IEditorOptions): void {
    if (options.mimetype !== void 0) {
      model.mimetype = options.mimetype;
    }
    if (options.filename !== void 0) {
      model.filename = options.filename;
    }
    if (options.fixedHeight !== void 0) {
      model.fixedHeight = options.fixedHeight;
    }
    if (options.lineNumbers !== void 0) {
      model.lineNumbers = options.lineNumbers;
    }
    if (options.readOnly !== void 0) {
      model.readOnly = options.readOnly;
    }
    if (options.text !== void 0) {
      model.text = options.text;
    }
    if (options.tabSize !== void 0) {
      model.tabSize = options.tabSize;
    }
  }

}
