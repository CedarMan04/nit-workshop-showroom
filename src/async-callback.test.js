const asyncTest = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(value!=="error"){
        resolve("success!")
      }else{
        reject("fail!")
      }
    }, 2000)
  })
}

test('非同期関数呼び出しの成功時、結果はsuccess!', async () => {
  await expect(asyncTest("success")).resolves.toBe('success!')
});

test('非同期関数呼び出しの失敗時、結果はfail!', async () => {
    await expect(asyncTest("error")).rejects.toMatch('fail!')
  }
);