import { moduleMetadata } from '@storybook/angular';
import { MatButton, MatButtonModule } from '@angular/material/button';

export default {
  title: 'Greenlight/Button',
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
    (story) => ({
      ...story(),
      template: `<div [ngClass]="{'oc-light-theme': !isDarkTheme}">${
        story().template
      }</div>`,
    }),
  ],
  component: MatButton,
  args: {
    isDarkTheme: true,
    isDisabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isDarkTheme: { control: 'boolean' },
    buttonColor: {
      control: {
        type: 'radio',
        options: ['primary', 'accent', 'warn'],
      },
    },
  },
};

export const Primary = (args) => ({
  props: args,
  template:
    '<button mat-flat-button [color]="buttonColor" [disabled]="isDisabled">{{ label }}</button>',
});

Primary.args = {
  label: 'Primary',
  buttonColor: 'primary',
};

export const Secondary = (args) => ({
  props: args,
  template:
    '<button mat-stroked-button [color]="buttonColor" [disabled]="isDisabled">{{ label }}</button>',
});

Secondary.args = {
  label: 'Secondary',
  buttonColor: 'primary',
};

export const Additional = (args) => ({
  props: args,
  template:
    '<button mat-button [color]="buttonColor" [disabled]="isDisabled">{{ label }}</button>',
});

Additional.args = {
  label: 'Additional',
  buttonColor: 'primary',
};
