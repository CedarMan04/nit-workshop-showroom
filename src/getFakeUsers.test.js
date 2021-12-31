import axios from "axios"
import { getFakeMale } from "./getFakeUsers"
jest.mock("axios")

test("ユーザ生成APIから、性別を男性に指定してデータを取得した結果が、男性データであること", () => {
  const users = [{gender: "male"}]
  const resp = {results: users}
  axios.get.mockResolvedValue(resp)

  return getFakeMale().then(data => expect(data).toEqual(resp))
})