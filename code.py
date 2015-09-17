import web
import os
render = web.template.render('templates/', base = "BaseLayout")
db = web.database(dbn='sqlite', db='users')

urls = (
  '/', 'Layout',
    '/LayoutP2', 'LayoutP2',
    '/LoginGood', 'LoginGood'
)

class Layout:
    def GET(self):
        return render.Layout()
    
class LayoutP2:
    def GET(self):
        users = db.select('user')
        print users
        return render.LayoutP2(users)
    def POST(self):
        form = web.input()
        n = db.insert('user', name=form.name, password = form.password)
        return web.seeother('LoginGood')
        
class LoginGood:
    def GET(self):
        return render.LoginGood()
        
    
        
        
if __name__ == "__main__": 
    app = web.application(urls, globals())
    app.run()        
    

