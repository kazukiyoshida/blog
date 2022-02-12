annotator = """
<head>
    <script>
      let secmentCount = 1;
      let l = window.location;
      let port = l.port ? ':' + l.port : ''
      l.replace(
          `${l.protocol}//${l.hostname}${port}/?p=${l.pathname.split('/').slice(0, 1 + segmentCount).join('/')}`
      )
    </script>
"""

decoder = """
<head>
    <script>
      (function (l) {
          if (l.search) {
              var q = {};
              l.search.slice(1).split('&').forEach(function (v) {
                  var a = v.split('=');
                  q[a[0]] = a[1];
              });
              if (q.p !== undefined) {
                  window.history.replaceState(null, null, l.pathname.slice(0, -1) + (q.p || ''));
              }
          }
      }(window.location))
    </script>
"""

with open('docs/404.html', 'r') as f:
    html = f.read()
with open('docs/404.html', 'w') as f:
    f.write(html.replace('<head>', annotator))

with open('docs/index.html', 'r') as f:
    html = f.read()
with open('docs/index.html', 'w') as f:
    f.write(html.replace('<head>', decoder))
