import * as React from 'react';
import styles from './News.module.scss';
import { INewsProps } from './INewsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class News extends React.Component<INewsProps, {}> {
  public render(): React.ReactElement<INewsProps> {
    return (
      <div className={ styles.news }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint hai!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
