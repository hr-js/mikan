User.destroy_all

User.create!({
  name: 'test-user',
  email: 'test@example.com',
  password: 'test123',
  password_confirmation: 'test123'
})
