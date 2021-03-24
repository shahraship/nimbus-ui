import { MatCheckbox, MatCheckboxModule } from "@angular/material/checkbox";
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Greenlight/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule],
    }),
    (story) => ({
      ...story(),
      template: `<div [ngClass]="{'oc-light-theme': !isDarkTheme}">${
        story().template
      }</div>`,
    }),
  ],
  component: MatCheckbox,
  args: {
    isDarkTheme: true,
    isDisabled: false,
    isChecked: false,
  },
  argTypes: {
    isDisabled: { control: 'boolean' },
    isDarkTheme: { control: 'boolean' },
    isChecked: { control: 'boolean' },
    buttonColor: {
      control: {
        type: 'radio',
        options: ['primary', 'accent', 'warn'],
      },
    },
  },
};

export const Checkbox = (args) => ({
  props: args,
  template:
    '<mat-checkbox [color]="checkboxColor" [checked]="isChecked" [disabled]="isDisabled"></mat-checkbox>',
});

Checkbox.args = {
  checkboxColor: 'primary',
};
