

class biology :
    def __init__(self,hp_value,attack_value,defense_value):
        
        self.hp_value = hp_value
        self.attack_value = attack_value
        self.defense_value = defense_value

class intelligent_body (biology):
    def __init__(self,name,hp_value,attack_value,defense_value):
        self.name = name
        super().__init__(hp_value,attack_value,defense_value)

class human (intelligent_body):
    def __init__(self,name,hp_value,attack_value,defense_value):
        self.race = "human"
        super().__init__(name,hp_value,attack_value,defense_value)

class elves(intelligent_body):
    def __init__(self,name,hp_value,attack_value,defense_value):
        self.race = "elves"
        super().__init__(name,hp_value,attack_value,defense_value)

class orc(intelligent_body):
        
    def __init__(self,name,hp_value,attack_value,defense_value):
        self.race = "intelligent_body"
        super().__init__(name,hp_value,attack_value,defense_value)


word = word()

a = word.new_role("human","A",100,100,50)
b = word.new_role("elves","B",100,100,50)
c = word.new_role("orc","C",100,100,50)

word.attack(a,b)
word.attack(b,c)

word.print_parameter(a)
word.print_parameter(b)
word.print_parameter(c)
