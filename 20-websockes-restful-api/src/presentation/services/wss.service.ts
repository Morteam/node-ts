import { Server } from 'http'
import { WebSocketServer, WebSocket } from 'ws';

interface Options {
  server: Server;
  path?: string;
}

export class WSSService {
  private static _instance: WSSService
  private wss: WebSocketServer;

  private constructor(options: Options) {
    const { server, path = '/ws' } = options

    this.wss = new WebSocketServer({ server, path })
    this.start()
  }

  static get instance(): WSSService {
    if(!WSSService._instance) {
      throw 'WSSService is not initialized'
    }

    return WSSService._instance
  }

  static initWSServer(options: Options) {
    WSSService._instance = new WSSService(options)
  }

  public start() {
    this.wss.on('connection', (ws: WebSocket) => {
      console.log('Client Connect')

      ws.on('close', () => {
        console.log('Client Disconnect')
      })
    })
  }
}
