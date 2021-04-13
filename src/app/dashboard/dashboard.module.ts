// tslint:disable-next-line: ordered-imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatFiltersComponent } from "./stat-filters/stat-filters.component";
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from "./video-list/video-list.component";
import { VideoPlayerComponent } from "./video-player/video-player.component";


const routes: Routes = [
  { path: '', component: VideoDashboardComponent }
];

@NgModule({
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent]
})
export class DashboardModule { }
