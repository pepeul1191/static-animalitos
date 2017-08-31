import tornado.ioloop
import tornado.web
import logging
import tornado
import os
from tornado.options import define, options

tornado.options.parse_command_line()

path = lambda root,*a: os.path.join(root, *a)

ROOT = os.path.dirname(os.path.abspath(__file__))
MEDIA_ROOT = path(ROOT, 'media')


print MEDIA_ROOT

settings = {}
settings['debug'] = True
settings['autoreload'] = True
settings['static_path'] = MEDIA_ROOT
settings['cookie_secret'] = "your-cookie-secret"
settings['xsrf_cookies'] = False

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

if __name__ == "__main__":
    app = tornado.web.Application([
	    (r"/", MainHandler)], **settings)
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()