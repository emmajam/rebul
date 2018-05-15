import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';

const imports = {
  Field: require('../src/_common/Field'),
  FieldBody: require('../src/_common/FieldBody'),
  FieldControl: require('../src/_common/FieldControl'),
  FieldLabel: require('../src/_common/FieldLabel'),
  Box: require('../src/Box/Box'),
  Button: require('../src/Button/Button'),
  Buttons: require('../src/Button/Buttons'),
  Card: require('../src/Card/Card'),
  Columns: require('../src/Columns/Columns'),
  Column: require('../src/Column/Column'),
  Container: require('../src/Container/Container'),
  Content: require('../src/Content/Content'),
  Delete: require('../src/Delete/Delete'),
  Footer: require('../src/Footer/Footer'),
  Hero: require('../src/Hero/Hero'),
  Icon: require('../src/Icon/Icon'),
  Image: require('../src/Image/Image'),
  Level: require('../src/Level/Level'),
  Media: require('../src/Media/Media'),
  Message: require('../src/Message/Message'),
  Notification: require('../src/Notification/Notification'),
  Progress: require('../src/Progress/Progress'),
  Section: require('../src/Section/Section'),
  Table: require('../src/Table/Table'),
  Tag: require('../src/Tag/Tag'),
  Tags: require('../src/Tag/Tags'),
  TextField: require('../src/TextField/TextField'),
  TextAreaField: require('../src/TextAreaField/TextAreaField'),
  SelectField: require('../src/SelectField/SelectField'),
  Title: require('../src/Title/Title')
};
const pages = [
  {
    title: 'Introduction',
    path: '/',
    content: pageLoader(() => import('./introduction.md'))
  },
  {
    title: 'Layout',
    pages: [
      {
        title: 'Columns',
        path: '/elements/columns',
        styles: ['/columns.css'],
        content: pageLoader(() => import('./columns.js'))
      },
      {
        title: 'Container',
        path: '/elements/container',
        styles: ['/columns.css'],
        content: pageLoader(() => import('./container.js'))
      },
      {
        title: 'Footer',
        path: '/elements/footer',
        content: pageLoader(() => import('./footer.js'))
      },
      {
        title: 'Hero',
        path: '/elements/hero',
        styles: ['/columns.css'],
        content: pageLoader(() => import('./hero.js'))
      },
      {
        title: 'Level',
        path: '/elements/level',
        content: pageLoader(() => import('./level.js'))
      },
      {
        title: 'Media',
        path: '/elements/media',
        content: pageLoader(() => import('./media.js'))
      },
      {
        title: 'Section',
        path: '/elements/section',
        content: pageLoader(() => import('./section.js'))
      }
    ]
  },
  {
    title: 'Elements',
    pages: [
      {
        title: 'Box',
        path: '/elements/box',
        content: pageLoader(() => import('./box.js'))
      },
      {
        title: 'Button',
        path: '/elements/button',
        content: pageLoader(() => import('./button.js'))
      },
      {
        title: 'Content',
        path: '/elements/content',
        content: pageLoader(() => import('./content.js'))
      },
      {
        title: 'Delete',
        path: '/elements/delete',
        content: pageLoader(() => import('./delete.js'))
      },
      {
        title: 'Icon',
        path: '/elements/icon',
        content: pageLoader(() => import('./icon.js'))
      },
      {
        title: 'Image',
        path: '/elements/image',
        content: pageLoader(() => import('./image.js'))
      },
      {
        title: 'Notification',
        path: '/elements/notification',
        content: pageLoader(() => import('./notification.js'))
      },
      {
        title: 'Progress',
        path: '/elements/progress',
        content: pageLoader(() => import('./progress.js'))
      },
      {
        title: 'Table',
        path: '/elements/table',
        content: pageLoader(() => import('./table.js'))
      },
      {
        title: 'Tag',
        path: '/elements/tag',
        content: pageLoader(() => import('./tag.js'))
      },
      {
        title: 'Title',
        path: '/elements/title',
        content: pageLoader(() => import('./title.js'))
      }
    ]
  },
  {
    title: 'Form',
    pages: [
      {
        title: 'Text Field',
        path: '/form/text-field',
        content: pageLoader(() => import('./text-field.js'))
      },
      {
        title: 'Text Area Field',
        path: '/form/text-area-field',
        content: pageLoader(() => import('./text-area-field.js'))
      },
      {
        title: 'Select Field',
        path: '/form/select-field',
        content: pageLoader(() => import('./select-field.js'))
      }
    ]
  },
  {
    title: 'Components',
    pages: [
      {
        title: 'Card',
        path: '/elements/card',
        content: pageLoader(() => import('./card.js'))
      },
      {
        title: 'Message',
        path: '/elements/message',
        content: pageLoader(() => import('./message.js'))
      }
    ]
  }
];

ReactDOM.render(
  <Catalog
    title="Rebul"
    logoSrc="./rebul.png"
    imports={imports}
    pages={pages}
    theme={{
      linkColor: '#3273dc',
      sidebarColorTextActive: '#3273dc',
      pageHeadingBackground: '#3273dc'
    }}
  />,
  document.getElementById('catalog')
);
