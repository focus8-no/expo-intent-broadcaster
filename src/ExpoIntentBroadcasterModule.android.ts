import { NativeModule, requireNativeModule } from 'expo';
import { BroadcastAction } from './types';

declare class ExpoIntentBroadcasterModule extends NativeModule {
  sendBroadcast(
    action: string | BroadcastAction,
    extras?: Record<string, any>
  ): boolean;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIntentBroadcasterModule>(
  'ExpoIntentBroadcaster'
);
