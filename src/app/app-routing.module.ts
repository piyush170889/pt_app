import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
        loadChildren: './tabs/tabs.module#TabsPageModule'
    },
    { path: 'weather-temp', loadChildren: './weather-temp/weather-temp.module#WeatherTempPageModule' },

    /* Air Quality Module routing links */
    { path: 'air-quality', loadChildren: './pages/air-quality/base-tabs/base-tabs.module#BaseTabsPageModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    /* End Air Quality Module routing links */
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
