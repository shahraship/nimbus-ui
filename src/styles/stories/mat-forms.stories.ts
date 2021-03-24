import { moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Greenlight/Forms',
  decorators: [
    moduleMetadata({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
    }),
    (story) => ({
      ...story(),
      template: `<div [ngClass]="{'oc-light-theme': !isDarkTheme}">${
        story().template
      }</div>`,
    }),
  ],
  component: MatFormFieldModule,
  args: {
    isDarkTheme: true,
    isDisabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
};

export const SingleLine = (args) => ({
  props: args,
  template: `<mat-form-field appearance="outline">
        <mat-label>{{label}}</mat-label>
        <input matInput placeholder="{{placeholder}}" [disabled]="isDisabled">
        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
        <mat-hint>{{hint}}</mat-hint>
      </mat-form-field>`,
});

SingleLine.args = {
  label: 'Form Field Label',
  placeholder: 'Placeholder Text',
  hint: 'Hint Text',
};

export const Select = (args) => ({
  props: args,
  template: ` <mat-form-field appearance="outline">
    <mat-label>{{label}}</mat-label>
    <mat-select>
      <mat-option value="option">Option</mat-option>
      <mat-option value="option2">Option 2</mat-option>
      <mat-option value="option3">Option 3</mat-option>
      <mat-option value="option4">Option 4</mat-option>
      <mat-option value="option5">Option 5</mat-option>
    </mat-select>
    <mat-hint align="end">{{hint}}</mat-hint>
  </mat-form-field>`,
});

Select.args = {
  label: 'Select Me',
  hint: "Here's the dropdown arrow ^",
};
