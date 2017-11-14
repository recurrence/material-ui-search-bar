declare module 'material-ui-search-bar' {
  export interface SearchBarProps {
      /**
       * Override the close icon.
       */
      closeIcon?: any;
      /**
       * Disables text field.
       */
      disabled?: any;
      /**
       * Sets placeholder for the embedded text field.
       */
      placeholder?: any;
      /**
       * Fired when the text value changes.
       */
      onChange?(query: string): void;
      /**
       * Fired when the search icon is clicked.
       */
      onRequestSearch?(): void;
      /**
       * Override the search icon.
       */
      searchIcon?: any;
      /**
       * Override the inline-styles of the root element.
       */
      style?: any;
      /**
       * The value of the text field.
       */
      value?: string;
  }

  export default function SearchBar(props: SearchBarProps): JSX.Element;
}
