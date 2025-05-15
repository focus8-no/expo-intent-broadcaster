package expo.modules.intentbroadcaster

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.exception.Exceptions
import java.net.URL
import android.content.Intent
import android.content.Context
import android.util.Log

class ExpoIntentBroadcasterModule : Module() {
  private val context: Context
    get() = appContext.reactContext ?: throw Exceptions.ReactContextLost()

  override fun definition() = ModuleDefinition {
    Name("ExpoIntentBroadcaster")

    Function("sendBroadcast") { action: String, extra: Map<String, Any>? ->
      try {
      Log.i("ExpoIntentBroadcaster", "Sending broadcast: action=$action, extra=$extra")

      val intent = Intent(action)
      extra?.let {
        for ((key, value) in it) {
          when (value) {
            is String -> intent.putExtra(key, value)
            is Int -> intent.putExtra(key, value)
            is Boolean -> intent.putExtra(key, value)
            is Float -> intent.putExtra(key, value)
            is Double -> intent.putExtra(key, value)
            else -> throw IllegalArgumentException("Unsupported extra type")
          }
        }
      }
      context.sendBroadcast(intent)

      Log.i("ExpoIntentBroadcaster", "Broadcast sent: action=$action, extra=$extra")

      return@Function true
      } catch (e: Exception) {
      Log.e("ExpoIntentBroadcaster", "Error sending broadcast", e)

      return@Function false
      }
    }
  }
}
