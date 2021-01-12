from re import match
class format_css():

    def __init__(self, direccion):
        self.startLine = 0
        self.finalLine = 0 
        self.countLine = 0
        self.direccion = direccion

    def get_format_css(self):
        fileR = open(self.direccion, "r")
        linebline = fileR.readlines()
        gtfoh = lambda x: x.strip()
        linebline = list(map(gtfoh, linebline))
        for i in linebline:
            self.nextLine(i, linebline)
        print(linebline)
        fileR.close()

    def nextLine(self, line, listLine):
        if "{" in line:
            if line[len(line) - 1] != '{':
                line = line.split("{")
                listLine.insert(self.countLine, line[0] + '{')
                listLine.insert(self.countLine + 1, line[1])
                del(listLine[self.countLine + 2])

format = format_css("1/styles_1.css")
format.get_format_css()