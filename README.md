# angular-9-ngx-echarts-trpz7a

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-9-ngx-echarts-trpz7a)


import pandas as pd
import re

# Seu texto
texto = "02053-2$&BCO SANTANDER (BRASIL): S.A.$&DFP - Demonstrações Financeiras Padronizadas$& - $&<spanOrder>...</i>"

# Extrair dados usando expressões regulares
padrao = re.compile(r'<spanOrder>(.*?)<\/spanOrder>|(\d{2}\/\d{2}\/\d{4})|(\d{2}:\d{2})|([^\$&]+)')

dados = [match.group(1) or match.group(2) or match.group(3) or match.group(4) for match in padrao.finditer(texto)]

# Criar um DataFrame
df = pd.DataFrame([dados], columns=["Código", "Instituição Financeira", "Tipo Documento", "Data de Referência", "Data de Publicação", "Hora", "Categoria", "Página", "Visualizar Documento", "Download", "Informação", "Protocolo de Entrega"])

# Exibir o DataFrame
print(df)
