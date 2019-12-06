import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../../components/Container';
import Heading from '../../components/Heading';

export default class Methods extends Component {
    state = {
        hideText: true,
        question: '',
        answer: ''
    };

    componentDidMount() {
        const self = this;
        var padding = { top: 20, right: 40, bottom: 0, left: 0 },
            w = 525 - padding.left - padding.right,
            h = 525 - padding.top - padding.bottom,
            r = Math.min(w, h) / 2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20(); //category20c()

        var data = [
            {
                label: 'Create',
                question: 'POST'
            },
            {
                label: 'Read',
                question: 'GET'
            },
            {
                label: 'Replace',
                question: 'POST'
            },
            {
                label: 'Modify',
                question: 'PATCH'
            },
            {
                label: 'Delete',
                question: 'DELETE'
            }
        ];

        var svg = d3
            .select('#chart')
            .append('svg')
            .data([data])
            .attr('width', w + padding.left + padding.right)
            .attr('height', h + padding.top + padding.bottom);

        var container = svg
            .append('g')
            .attr('class', 'chartholder')
            .attr(
                'transform',
                'translate(' +
                    (w / 2 + padding.left) +
                    ',' +
                    (h / 2 + padding.top) +
                    ')'
            );

        var vis = container.append('g');

        var pie = d3.layout
            .pie()
            .sort(null)
            .value(function(d) {
                return 1;
            });

        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);

        // select paths, use arc generator to draw
        var arcs = vis
            .selectAll('g.slice')
            .data(pie)
            .enter()
            .append('g')
            .attr('class', 'slice');

        arcs.append('path')
            .attr('fill', function(d, i) {
                return color(i);
            })
            .attr('d', function(d) {
                return arc(d);
            });

        // add the text
        arcs.append('text')
            .attr('transform', function(d) {
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle) / 2;
                return (
                    'rotate(' +
                    ((d.angle * 180) / Math.PI - 90) +
                    ')translate(' +
                    (d.outerRadius - 10) +
                    ')'
                );
            })
            .attr('text-anchor', 'end')
            .text(function(d, i) {
                return data[i].label;
            });

        container.on('click', spin);

        function spin(d) {
            self.setState(prevState => ({
                hideText: true,
                answer: '',
                question: ''
            }));
            container.on('click', null);

            //all slices have been seen, all done
            console.log(
                'OldPick: ' + oldpick.length,
                'Data length: ' + data.length
            );
            if (oldpick.length == data.length) {
                console.log('done');
                container.on('click', null);
                return;
            }

            var ps = 360 / data.length,
                rng = Math.floor(Math.random() * 1440 + 360);

            rotation = Math.round(rng / ps) * ps;

            picked = Math.round(data.length - (rotation % 360) / ps);
            picked = picked >= data.length ? picked % data.length : picked;

            if (oldpick.indexOf(picked) !== -1) {
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
            }

            rotation += 90 - Math.round(ps / 2);

            vis.transition()
                .duration(3000)
                .attrTween('transform', rotTween)
                .each('end', function() {
                    //populate question
                    self.setState(prevState => ({
                        hideText: true,
                        question: data[picked].label,
                        answer: data[picked].question
                    }));

                    oldrotation = rotation;

                    container.on('click', spin);
                });
        }

        //make arrow
        svg.append('g')
            .attr(
                'transform',
                'translate(' +
                    (w + padding.left + padding.right) +
                    ',' +
                    (h / 2 + padding.top) +
                    ')'
            )
            .append('path')
            .attr(
                'd',
                'M-' + r * 0.15 + ',0L0,' + r * 0.05 + 'L0,-' + r * 0.05 + 'Z'
            )
            .style({ fill: 'black' });

        //draw spin circle
        container
            .append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 60)
            .style({ fill: 'white', cursor: 'pointer' });

        function rotTween(to) {
            var i = d3.interpolate(oldrotation % 360, rotation);
            return function(t) {
                return 'rotate(' + i(t) + ')';
            };
        }
    }

    render() {
        return (
            <Container back="/rest/components" next="">
                <Heading>Methods</Heading>
                <WheelContainer>
                    <Centered>
                        {this.state.answer && (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Operation</th>
                                        <th>Verb</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.question}</td>
                                        <td
                                            onClick={() =>
                                                this.setState(prevState => ({
                                                    hideText: false
                                                }))
                                            }
                                        >
                                            {this.state.hideText
                                                ? '???'
                                                : this.state.answer}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </Centered>
                    <div id="chart"></div>
                </WheelContainer>
            </Container>
        );
    }
}

const WheelContainer = styled.div`
    text {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 32px;
        font-weight: bold;
        pointer-events: none;
    }
    #chart {
        cursor: pointer;
        width: 500px;
        height: 500px;
    }

    td,
    th {
        border: 1px solid black;
        font-size: 28px;
        text-align: center;
        padding: 5px;
        min-width: 150px;
    }

    th {
        font-style: italic;
    }
`;

const Centered = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    min-height: 110px;
`;
