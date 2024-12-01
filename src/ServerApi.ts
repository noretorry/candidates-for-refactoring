interface IKekRes {
  id: string | number
  kek: string
}
interface IDeleteAccRes {
  message: string
}
interface IAuthRes {
  kekesId: string | number
  kekesName?: string
}

export default class ServerApi {
  private async customFetch<T, B>(method: string, url: string, body?: B): Promise<T> {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    })
    return await (res.json())
  }

  public processAddAccountRequest(url: string, account: TAccount): Promise<IKekRes> {
    return this.customFetch('POST', url, account);
  }

  public sendDeleteAccountRequest(url: string, accountId: string): Promise<IDeleteAccRes> {
    return this.customFetch('DELETE', url, accountId);
  }

  public requestAuth(url: string, credentials: TCredentials): Promise<IAuthRes> {
    return this.customFetch('GET', url, credentials);
  }
}

// Теперь должно быть видно ответы в подсказках ts

