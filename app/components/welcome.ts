import {html, css} from 'lit';

import {Component, TiniComponent} from '@tinijs/core';

@Component()
export class AppWelcomeComponent extends TiniComponent {
  static readonly defaultTagName = 'app-welcome';

  protected render() {
    return html`
      <h1>Hello! 👋</h1>
      <p>Thank you for using the TiniJS <strong>Blank</strong> template.</p>
      <p>Get started from <code>./app/pages/home.ts</code>.</p>
      <p>
        For more detail, please visit
        <a href="https://tinijs.dev/" target="_blank">tinijs.dev</a>.
      </p>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      padding: 1rem;
      max-width: 768px;
      font-family: sans-serif;
    }
  `;
}
