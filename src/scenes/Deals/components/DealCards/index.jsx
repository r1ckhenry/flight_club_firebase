import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = {
  card: {
    margin: 10
  }
};

function DealCards(props) {
  const { classes, deals } = props;

  const cards = deals.map((deal, index) => {
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                FROM
              </Typography>
              <Typography variant="headline" component="h2">
                {deal.originIata}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {deal.originCity}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                TO
              </Typography>
              <Typography variant="headline" component="h2">
                {deal.destinationIata}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {deal.destinationCity}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                PRICE
              </Typography>
              <Typography variant="headline" component="h2">
                £{deal.cheapestFlights[0].price}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center" gutterBottom>
            {deal.cheapestFlights.length} dates available
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Departing</TableCell>
                <TableCell>Returning</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deal.cheapestFlights.map(flight => {
                return (
                  <TableRow key={flight.id}>
                    <TableCell>
                      {flight.departing}
                    </TableCell>
                    <TableCell numeric>
                      {flight.returning}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  });

  return (
    <div>
      {cards}
    </div>
  );
}

export default withStyles(styles)(DealCards);
