'use client';
import { useRef, useState } from "react";
import Select, { SelectInstance } from "react-select";
import { filiais, Filial } from "@/constants/filiais";

type SelectOption = {
    value: string;
    label: string;
};

export default function GeradorEtiquetas() {

    const [FilialSelecionada, SetFilialSelecionada] = useState<Filial | null>(null);
    const [generatedTexts, setGeneratedTexts] = useState<string[]>([]);
    const [tipo, setTipo] = useState<string>("DESK");
    const [quantidade, setQuantidade] = useState<number>(0);
    const [nomeEtiquetaPersonalizada, setNomeEtiquetaPersonalizada] = useState<string>("");
    const [EtiquetaPersonalizada, setEtiquetaPersonalizada] = useState<boolean>(false);


    const handleGenerateText = () => {
        if (EtiquetaPersonalizada && nomeEtiquetaPersonalizada) {
            setGeneratedTexts((prevTexts) => [...prevTexts, nomeEtiquetaPersonalizada]);
            return;
        }

        if (FilialSelecionada && quantidade > 0 && EtiquetaPersonalizada === false) {
            const newTexts: string[] = [];
            for (let i = 1; i <= quantidade; i++) {
                newTexts.push(`Z${FilialSelecionada.code} - ${tipo}${i}`);
            }
            setGeneratedTexts((prevTexts) => [...prevTexts, ...newTexts]);
        } else {
            if (!FilialSelecionada) {
                alert("Selecione uma filial antes de gerar o texto!");
            }
            alert("Informe a quantidade de etiquetas a serem geradas!");
        }
    };

    const handleSelectChange = (selectedOption: SelectOption | null) => {
        const filial = selectedOption
            ? filiais.find((c) => c.id === selectedOption.value) || null
            : null;
        SetFilialSelecionada(filial);
    };

    const handleTipoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;



        setTipo(!value ? 'DESK' : event.target.value);
    };

    const handleEtiquetaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;

        setEtiquetaPersonalizada(isChecked ? true : false);
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value)
        if (value <= 0) {
            return;
        }
        setQuantidade(isNaN(value) ? 0 : value);
    };

    const handleLimparText = () => {
        setGeneratedTexts([]);
        setQuantidade(0);
        SetFilialSelecionada(null);
        setNomeEtiquetaPersonalizada("");
    }

    const imprimirEtiquetas = () => {
        // Abre uma nova janela com o conteúdo do preview
        const novaJanela = window.open('', '_blank');
        if (novaJanela) {

            novaJanela.document.write(`
          <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Etiquetas para Impressão</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    margin-top: 30px;
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .etiqueta {
                    width: 300px;
                    padding: 20px;
                    border: 2px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 32px;
                    font-weight: bold;
                    text-align: center;
                    page-break-inside: avoid; /* Evita que as etiquetas sejam cortadas ao imprimir */
                }
            </style>
        </head>
        <body>
            <div>
                ${generatedTexts
                    .map(
                        (text) => `
                    <div class="etiqueta">
                        ${text}
                    </div>
                `
                    )
                    .join('')}
            </div>
            <script>
                // Chama a função de impressão automaticamente
                window.onload = () => {
                    window.print();
                };
            <\/script>
        </body>
        </html>
      `);
            novaJanela.document.close();
        };
    }


    return (
        <div className="bg-gray-100 flex justify-center min-h-screen min-w-screen dark:bg-gray-900 dark:text-white">
            <div className="bg-white p-12 rounded-lg shadow-xl w-full max-w-max my-8 dark:bg-gray-800 dark:text-white">
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">GERADOR DE ETIQUETAS</h1>
                    <span className="text-2xl">🏷️</span>
                </div>



                <div className="flex items-center mb-4 border-b-2 border-gray-800 dark:border-gray-100 pb-2">
                    <input type="checkbox" className="bg-gray-100 dark:bg-gray-700" onChange={handleEtiquetaChange} />
                    <span className="text-lg text-gray-700 dark:text-gray-100 ml-4 font-semibold">Etiqueta personalizada</span>
                </div>

                <div className="flex items-center mb-4 max-[450px]:flex-col">
                    <span className="text-xl text-gray-700 dark:text-gray-100 font-semibold mr-4">Filial: </span>
                    {!EtiquetaPersonalizada ? (
                        <Select
                            className="flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-slate-100 to-slate-200 text-sm text-black font-bold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            classNames={{
                                control: (state) => `rounded-lg bg-gradient-to-r from-slate-100 to-slate-200 text-sm font-bold ${state.isFocused ? 'border-blue-500 ring-2 ring-blue-500 outline-none text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' : ''
                                    }`,
                            }}
                            options={filiais.map(filiais => ({ value: filiais.id, label: filiais.code + ' - ' + filiais.nome }))}
                            onChange={handleSelectChange}
                            value={FilialSelecionada ? {
                                value: FilialSelecionada.id,
                                label: FilialSelecionada.code + ' - ' + FilialSelecionada.nome
                            } : null}
                            placeholder="Selecione uma filial..."
                        />) : (
                        <input
                            type="text"
                            placeholder="Digite o nome da etiqueta"
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-slate-100 to-slate-200 text-black placeholder:text-sm placeholder:font-semibold placeholder:normal-case uppercase dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            value={nomeEtiquetaPersonalizada}
                            onChange={(e) => setNomeEtiquetaPersonalizada(e.target.value.toUpperCase())}
                        />
                    )}
                </div>

                <div className="flex items-center mb-4 max-[450px]:flex-col">
                    <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mr-4">Tipo:</h1>
                    <select
                        name="select"
                        className={`flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-slate-100 to-slate-200 text-sm font-bold transition-opacity duration-300 disabled:bg-red-700 ${EtiquetaPersonalizada ? 'cursor-not-allowed bg-gray-100 text-gray-400 opacity-75' : 'text-black'}`}
                        value={tipo}
                        onChange={handleTipoChange}
                        disabled={EtiquetaPersonalizada}>
                        <option value="DESK" className="text-md font-bold">DESK</option>
                        <option value="PDV" className="text-md font-bold">PDV</option>
                    </select>
                </div>

                <div className="flex items-center mb-8 max-[450px]:flex-col">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mr-4">Quantidade:</h4>
                    <input
                        type="number"
                        placeholder="Digite a quantidade"
                        className={`flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-slate-100 to-slate-200 text-black transition-opacity duration-300 placeholder:text-sm placeholder:font-semibold ${EtiquetaPersonalizada ? 'cursor-not-allowed bg-gray-100 text-gray-400 opacity-75' : ''}`}
                        value={quantidade === 0 ? '' : quantidade}
                        onChange={handleQuantityChange}
                        disabled={EtiquetaPersonalizada} />
                </div>

                <div className="flex justify-between mb-8">
                    <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 " onClick={handleGenerateText}>Gerar</button>

                    <button className="bg-red-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-red-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleLimparText}>Limpar</button>
                </div>


                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2">Preview das Etiquetas</h2>
                    <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 shadow-lg">
                        {generatedTexts.map((text, index) => (
                            <div className="border-black border bg-white py-2 flex justify-center items-center flex-row" key={index} >
                                <span className="font-bold text-2xl text-black">{text}</span>
                            </div>
                        ))}


                    </div>
                </div>

                {generatedTexts.length > 0 && (
                    <div className="mt-6">
                        <button id="imprimirEtiquetas" className="w-full bg-blue-500 font-bold text-white px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={imprimirEtiquetas}
                        >
                            Imprimir Etiquetas
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
