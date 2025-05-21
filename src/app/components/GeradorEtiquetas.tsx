'use client';
import { useState } from "react";
import Select from "react-select";
import { filiais, Filial } from "@/constants/filiais";
import ScrollBottomButton from "./ScrollBottomButton";

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
    const [checklistFormatacao, setChecklistFormataçao] = useState<boolean>(false);


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

    const handleChecklistFormataçaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;

        setChecklistFormataçao(isChecked ? true : false);
    }

    const handleLimparText = () => {
        setGeneratedTexts([]);
        setQuantidade(0);
        SetFilialSelecionada(null);
        setNomeEtiquetaPersonalizada("");
    }

    const imprimirEtiquetas = () => {
        const novaJanela = window.open('', '_blank');
        if (!novaJanela) return

        const etiquetasHTML = generatedTexts.map(
            (text) => `
                <div class="etiqueta">
                    ${text}
                </div>
        `
        ).join('')

        const checklistHTML = checklistFormatacao ? generatedTexts.map(
            (text) => `
                <div class="checklist">
                <div class="titulo">✔ CHECKLIST DE FORMATAÇÃO</div>
                <div class="subtitulo">IMAGEM</div>
                
                <div class="linha">
                    <div class="coluna"><div class="caixa"></div> MATRIZ</div>
                    <div class="coluna"><div class="caixa"></div> VENDAS</div>
                    <div class="coluna"><div class="caixa"></div> PDV</div>
                </div>

                <div class="linha">
                    <div class="coluna"><div class="caixa"></div> Windows Update</div>
                    <div class="coluna"><div class="caixa"></div> Periféricos</div>
                </div>

                <div class="linha">
                    <div class="coluna"><div class="caixa"></div> Ativ. do Windows</div>
                    <div class="coluna"><div class="caixa"></div> Fonte</div>
                </div>

                <div class="linha">
                    <div class="coluna"><div class="caixa"></div> Antivirus</div>
                    <div class="coluna"><div class="caixa"></div> Ativo:</div>
                </div>

                <div class="linha">
                    <div class="coluna" style="border-right: none; font-weight: bold;">
                    HOSTNAME: <strong style="margin-left: 15px;">${text}</strong>
                    </div>
                </div>

                <div class="linha">
                    <div class="coluna" style="border-right: none; font-weight: bold;">
                    RESPONSÁVEL: ________________________
                    </div>
                </div>
                </div>
          `
        )
            .join('')
            : '';

        const htmlCompleto = `
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
                .A4 {
                        display: flex;
                        flex-direction: row;
                        justify-content: between;
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
                .checklist {
                    width: 300px;
                    border: 2px solid #000;
                    margin-left: 30px;
                    page-break-inside: avoid; /* Evita que as etiquetas sejam cortadas ao imprimir */
                }
                .linha {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-top: 1px solid black;
                    border-bottom: 1px solid black;
                }
                .linha span, .linha div {
                    padding: 2px;
                    font-size: 11px;
                }
                .titulo {
                    font-weight: bold;
                    font-size: 11px;
                    text-align: center;
                    width: 100%;
                    border-bottom: 1px solid black;
                    padding: 1px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2px;
                }
                .subtitulo {
                    text-align: center;
                    font-size: 11px;
                    font-weight: bold;
                    border-bottom: 1px solid black;
                    padding: 1px 0;
                }
                .caixa {
                    width: 5px;
                    height: 5px;
                    border: 1px solid black;
                    margin-right: 6px;
                    display: inline-block;
                }
                .coluna {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    border-right: 1px solid black;
                    justify-content: left;
                    padding-left: 8px;
                }
                .coluna:last-child {
                    border-right: none;
                }
            </style>
        </head>
        <body>
            <div class="A4">
                <div>
                    ${etiquetasHTML}
                </div>
                <div>
                    ${checklistHTML}
                </div>
                <script>
                    window.onload = () => {
                        window.print();
                    };
                <\/script>
            </div>
        </body>
        </html>
        `

        novaJanela.document.write(htmlCompleto);
        novaJanela.document.close();

    }


    return (
        <div className="bg-gray-100 flex justify-center min-h-screen min-w-screen dark:bg-gray-900 dark:text-white">
            <div className="bg-white p-12 rounded-lg shadow-xl w-full max-w-max my-8 dark:bg-gray-800 dark:text-white">

                {generatedTexts.length > 0 && (<div><ScrollBottomButton /></div>)}

                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">GERADOR DE ETIQUETAS</h1>
                    <span className="text-2xl">🏷️</span>
                </div>



                <div className="flex items-center mb-4 border-b-2 border-gray-800 dark:border-gray-100 pb-2">
                    <input type="checkbox" className="bg-gray-100 dark:bg-gray-700" disabled={checklistFormatacao} onChange={handleEtiquetaChange} />
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

                <div className="flex items-center mb-4  dark:border-gray-100 pb-2">
                    <input type="checkbox" className={`bg-gray-100 dark:bg-gray-700 ${EtiquetaPersonalizada ? 'cursor-not-allowed' : ''}`} disabled={EtiquetaPersonalizada} onChange={handleChecklistFormataçaoChange} />
                    <span className="text-lg text-gray-700 dark:text-gray-100 ml-4 font-semibold">Checklist Formatação</span>
                </div>

                <div className="flex justify-between mb-8">
                    <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 " onClick={handleGenerateText}>Gerar</button>

                    <button className="bg-red-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-red-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleLimparText}>Limpar</button>
                </div>


                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2">Preview das Etiquetas</h2>
                    <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 shadow-lg">
                        {generatedTexts.map((text, index) => (
                            <div className="border-black border bg-white py-2 flex justify-center items-center flex-row" key={index}>
                                <span className="font-bold text-2xl text-black">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {checklistFormatacao && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2">Preview dos Checklist</h2>
                        <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 shadow-lg">
                            {generatedTexts.map((text, index) => (
                                <div className="flex flex-col mt-4 bg-white border border-black" key={index}>
                                    <div className="flex flex-row justify-center items-center text-black border border-black">
                                        <span className="font-bold ml-4">✔ CHECKLIST DE FORMATAÇÃO</span>
                                    </div>
                                    <div className="flex justify-center items-center text-black border border-black">
                                        <span className="font-bold">IMAGEM</span>
                                    </div>

                                    <div className="flex flex-row justify-center items-center text-black border border-black">
                                        <div className="flex flex-row pl-2 items-center border-r border-black w-full">
                                            <div className="w-4 h-4 border border-black"></div>
                                            <span className="ml-2">MATRIZ</span>
                                        </div>
                                        <div className="flex flex-row pl-2 items-center border-r border-black w-full">
                                            <div className="w-4 h-4 border border-black"></div>
                                            <span className="ml-2">VENDAS</span>
                                        </div>
                                        <div className="flex flex-row pl-2 px-4 items-center w-full">
                                            <div className="w-4 h-4 border border-black"></div>
                                            <span className="ml-2">PDV</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-center items-center text-black border border-black">
                                        <div className="flex flex-row pl-2 items-center border-r border-black w-full">
                                            <div className="w-4 h-4 border border-black"></div>
                                            <span className="ml-2">Windows Update</span>
                                        </div>
                                        <div className="flex flex-row pl-2 items-center w-full">
                                            <div className="w-4 h-4 border border-black"></div>
                                            <span className="ml-2">Perifericos</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-black border border-black">
                                        <div className="flex flex-row pl-2 items-center border-r border-black w-full">
                                            <div className="w-4 h-4 border border-black"></div>
                                            <span className="ml-2">Ativ. do Windows</span>
                                        </div>
                                        <div className="flex flex-row pl-2 items-center w-full">
                                            <div className="w-4 h-4 border border-black"></div>
                                            <span className="ml-2">Fonte</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-black border border-black">
                                        <div className="flex flex-row pl-2 items-center border-r border-black w-full">
                                            <div className="w-4 h-4 border border-black"></div>
                                            <span className="ml-2">Antivirus</span>
                                        </div>
                                        <div className="flex flex-row pl-2 items-center w-full">
                                            <span className="">Ativo:</span>

                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-black border border-black">
                                        <div className="flex flex-row pl-2 items-center w-full">
                                            <span className="">HOSTNAME:</span><span className="font-bold ml-8">{text}</span>
                                        </div>

                                    </div>
                                    <div className="flex flex-row justify-center items-center text-black border border-black">
                                        <div className="flex flex-row justify-between pl-2 items-center w-full">
                                            <span>RESPONSAVEL:</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
