/**
 * チャットクライアントクラス
 */
export class ChatClient extends Photon.Chat.ChatClient {
  /**
   * コンストラクタ
   * @param appId アプリケーションID
   */
  constructor (appId: string) {
    super(Photon.ConnectionProtocol.Ws, appId, "1.0");
  }
}