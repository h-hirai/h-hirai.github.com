from xml.etree.ElementTree import *

Nx = 30
Ny = 20
Interval = 20

def px(n): return '%dpx' % n

svg = Element('svg',
              {'xmlns':'http://www.w3.org/2000/svg',
               'xmlns:xlink':'http://www.w3.org/1999/xlink',
               'width':px(Interval * Nx),
               'height':px(Interval * Ny),
               'viewBox':'0 0 %d %d' % (Interval * Nx, Interval * Ny)})

SubElement(SubElement(SubElement(svg, 'defs'),
                      'marker',
                      {'id':'Triangle',
                       'viewBox':'0 0 10 10',
                       'refX':'0',
                       'refY':'5',
                       'markerUnits':'strokeWidth',
                       'markerWidth':'4',
                       'markerHeight':'3',
                       'orient':'auto'}),
           'path',
           {'d':'M 0 0 L 10 5 L 0 10 z'})

def gridpoints(parent, nx, ny, interval):
    for y in range(ny):
        for x in range(nx):
            SubElement(parent,
                       'circle',
                       {'cx':px(x * interval),
                        'cy':px(y * interval),
                        'r':'1px'})

def arrow(x1, y1, x2, y2):
    SubElement(svg,
               'line',
               {'fill':'none',
                'stroke':'black',
                'x1':(x1 * Interval).__str__(),
                'y1':(y1 * Interval).__str__(),
                'x2':(x2 * Interval).__str__(),
                'y2':(y2 * Interval).__str__(),
                'stroke-width':'5',
                'marker-end':'url(#Triangle)'})

def arrowhead(parent, x, y):
    SubElement(parent,
               'polyline',
               {'fill':'none',
                'stroke':'black',
                'points':'%d,%d %d,%d %d,%d' %
                ((x - 1) * Interval, (y - 1) * Interval,
                 x * Interval, y * Interval,
                 (x - 1) * Interval, (y + 1) * Interval)})

gridpoints(svg, Nx, Ny, Interval)
arrowhead(svg, 5, 5)
arrow(15, 15, 10, 10)
arrow(15, 5, 1, 10)

print tostring(svg)
