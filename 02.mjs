const {scrypt} = await import('node:crypto')
  
scrypt('password', 'salt', 64, (err, derivedKey) => {
  if (err) throw err
  console.log(derivedKey.toString('hex'))
});