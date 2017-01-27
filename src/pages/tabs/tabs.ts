import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
import { FeedPage } from '../feed/feed';
import { PostPage } from '../post/post';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab4Root: any = LoginPage;
  tab5Root: any = FeedPage;
  tab6Root: any = PostPage;

  constructor() {

  }
}
