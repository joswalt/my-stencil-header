import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-stencil-header',
  styleUrl: 'my-stencil-header.css',
  shadow: true,
})
export class MyHeader {
  @Prop() first: string;
  @Prop() second: string;
  @Prop() third: string;

  render() {
    return (
      <header>
        <nav>
          <li>{this.first}</li>
          <li>{this.second}</li>
          <li>{this.third}</li>
        </nav>
      </header>
    );
  }
}
