import web
render = web.template.render("")
urls = (
  '/', 'index'
)

class index:
    def GET(self):
        return render.Layout()
        
        
if __name__ == "__main__": 
    app = web.application(urls, globals())
    app.run()        