import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { IndexComponent } from './profile/index/index.component';
import { FriendComponent } from './friend/friendIndex/friend.component';
import { InitialComponent } from './about/info/initial.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'profiles',
        component: IndexComponent,
      },
      {
        path: 'friends',
        component: FriendComponent,
      },
      {
        path: 'about',
        component: InitialComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
