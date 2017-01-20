class Skulpt
  require 'execjs'
  require 'open-uri'

  def self.run_code(code)
    source = source_code(code)
    ExecJS.compile(source)
#    output = ExecJS.eval(source)
    print output
  end

  def self.source_code(code)
    'function builtinRead(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found";
        return Sk.builtinFiles["files"][x];
        }

        Sk.configure({ read: builtinRead });

        Sk.misceval.asyncToPromise(function() {
         return Sk.importMainWithBody("<stdin>",false,' + code.to_s + ',true);
        });'
  end

end
