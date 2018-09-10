import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageHandlerService } from './message-handler.service';
import { HttpErrorHandler, MessagesHandlerComponent, handlerProviderDialog } from '../../../../../public_api';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MessagesHandlerComponent
    ],
    entryComponents: [MessagesHandlerComponent],
    providers: [
        MessageHandlerService,
        HttpErrorHandler,
        handlerProviderDialog
     ]
  })
export class MessageHandlerModule {}
