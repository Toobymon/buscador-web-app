import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeaderModule } from './app/header/header.module';
import { MainModule } from './app/pages/main/main.module';
import { FooterModule } from './app/footer/footer.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HeaderModule).catch(err => console.log(err));
platformBrowserDynamic().bootstrapModule(MainModule).catch(err => console.log(err));
platformBrowserDynamic().bootstrapModule(FooterModule).catch(err => console.log(err));
