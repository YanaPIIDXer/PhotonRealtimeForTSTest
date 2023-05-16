/**
 * チャットクライアントクラス
 */
export class ChatClient extends Photon.Chat.ChatClient {
  /**
   * コンストラクタ
   * @param appId アプリケーションID
   * @param canvas Canvas要素
   */
  constructor (appId: string, private canvas: HTMLCanvasElement) {
    super(Photon.ConnectionProtocol.Ws, appId, "1.0");
  }
}